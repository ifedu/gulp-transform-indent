'use strict'

const through = require('through2')

module.exports = function (options) {
    const convertSpaces = (str, match) => {
        const regExp = new RegExp(match, 'g')
        const finded = str.match(regExp)
        let spaces = ''

        if (finded === null) {
            return spaces
        }

        for (let i = 0; i < finded.length; i++) {
            spaces += options.spacesAfter
        }

        return spaces
    }

    return through.obj(function (file, enc, cb) {
        const regExp = /^[ \t]+/gm
        let content = String(file.contents)

        content = content.replace(regExp, (str) => {
            let spaces = ''

            spaces += convertSpaces(str, options.spacesBefore)
            spaces += convertSpaces(str, '\t')

            return spaces
        })

        file.contents = new Buffer(content)

        cb(null, file)
    })
}