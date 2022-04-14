declare module 'ecstatic' {
  export default (options?: {
    root?: string
    baseDir?: string
    autoIndex?: boolean
    showDir?: boolean
    showDotfiles?: boolean
    gzip?: boolean
    cache?: string | number
    defaultExt?: 'html' | (string & {})
    contentType?: 'application/octet-stream' | (string & {})
  }) => any
}
