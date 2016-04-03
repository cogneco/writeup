import { Node } from "./Node"
import { Source } from "./Source"
import { Inline } from "./Inline"
import * as Error from "../U10sil/Error/Region"
// Used via dependency injection in Inline
import "./Text"
import "./Emphasize"

export abstract class Block extends Node {
	constructor(region: Error.Region) {
		super(region)
	}
	private static parsers: { parse: ((source: Source) => Block[]), priority: number }[] = []
	static addParser(parser: (source: Source) => Block[], priority?: number) {
		if (!priority)
			priority = 0
		Block.parsers.push({ parse: parser, priority: priority})
		Block.parsers = Block.parsers.sort((left, right) => right.priority - left.priority)
	}
	static parse(source: Source): Block[] {
		var result: Block[]
		var i = 0
		do
			result = Block.parsers[i++].parse(source)
		while (!result && i < Block.parsers.length)
		return result
	}
	static parseAll(source: Source): Block[] {
		var result: Block[] = []
		var r: Block[]
		while ((r = Block.parse(source)) && r.length > 0)
			result = result.concat(r)
		return result
	}
}
