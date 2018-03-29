import {resolve} from "path"
import assert from "assert"
import {print, test} from "amen"
import processor from "../src"

verify = ({before, actual, expected}) ->
  -> assert.equal expected, await actual do before

before = -> processor {require}

do ->

  print await test "biscotti-cpp", [

    test "from path", verify
      before: before
      actual: (render) -> render path: resolve "./test/files/index.bpp"
      expected: "# Greetings!\n\n\n\nThis is a test.\n\n\
        Hello, Foo!\n\nGoodbye, now!"

    test "from content", verify
      before: before
      actual: (render) ->
        render content: """
          # Greetings!

          :: do $ -> "Hello, Bar!" ::
        """
      expected: '# Greetings!\n\nHello, Bar!'
  ]
