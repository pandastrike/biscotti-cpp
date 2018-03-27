import assert from "assert"
import {print, test} from "amen"
import processor from "../src"

do ->

  print await test "biscotti-cpp", do ->

    process = processor {require}

    [

        test "from path", ->

          # we need to do this because this path is relative to
          # file not where the tests may be run from ...
          path = resolve "./test/files/index.bpp"
          result = await process {path}
          assert.equal result,
            '# Greetings!\n\n\n\nThis is a test.\n\n\
              Hello, Foo!\n\nGoodbye, now!'

        test "from string", ->

          content = """
            # Greetings!

            :: do $ -> "Hello, Bar!" ::
            """
          result = await process {content}
          assert.equal result,
            '# Greetings!\n\nHello, Bar!'

  ]
