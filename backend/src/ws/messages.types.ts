export type Author = 'me' | 'contact'

export interface IncomingMessage {
  text: string
  ts: number
  author: Author
}
