import * as Error from "../../U10sil/source/Error"
import { Renderer } from "../Renderer"
import { Block } from "./Block"
import { ContentBlock } from "./ContentBlock"

export class ListItem extends ContentBlock<Block> {
	constructor(content: Block[], region: Error.Region) {
		super(content, region)
	}
	render(renderer: Renderer): string {
		return renderer.render("list item", { "content": super.render(renderer) })
	}
	toObject(): any {
		var result = super.toObject()
		result["type"] = "ListItem"
		return result
	}
	toString(symbol?: string): string {
		if (!symbol)
			symbol = " - "
		return symbol + super.toString()
	}
}
