import {loader, fallback, buffer, include, embedded,
  filters, sandbox, engine} from "biscotti"

processor = ({globals = {require}, open = "::", close}) ->

  engine [
    sandbox: sandbox globals
    loader
      biscotti:
        index: true
        extensions: [ ".bpp" ]
    fallback language: "biscotti"
    do include
    buffer
    embedded open, close
    filter
  ]

export {processor as default}
