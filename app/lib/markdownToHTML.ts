import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

export default function markdownToHTML(markdown: string) {
    return parser.render(markdown);
}