const lg               = require('./lg')
const path             = require('path')
let pathname           = 'C:\\Users\\luoyin\\MyProject\\nodejs\\path\\...\\demo.js'
// path.basename
let pathbasename       = path.basename(pathname)
console.log(pathbasename)
let pathbasename2 = path.basename(pathname, '.js')
console.log(pathbasename2)
// path.delimiter
console.log(process.env.PATH)
console.log(process.env.PATH.split(path.delimiter))
// path.dirname
console.log(path.dirname(pathname))
// path.extname
console.log(path.extname(pathname))
console.log(path.extname('.name'))
console.log(path.extname('name.'))
console.log(path.extname('n.abc'))
//path.format
console.log(path.format({
    root: 'C:'
}))
console.log(path.format({
    root: 'C:\\',//第一根“\”是转义
    dir : 'path'//如果有dir,root被忽略
}))
console.log(path.format({
    root: 'C:\\',//第一根“\”是转义
    dir : 'path',
    base: 'demo.js'
}))
console.log(path.format({
    root: 'C:\\',//第一根“\”是转义
    dir : 'path',
    base: 'demo.js',//如果有base忽略ext和name
    ext : '.txt',
    name: 'node'
}))
console.log(path.format({
    root: 'C:\\',//第一根“\”是转义
    dir : 'path',
    ext : '.txt',
    name: 'node'
}))
// path.isAbsolute
lg(path.isAbsolute(pathname))
lg(path.isAbsolute('.'))
// path.join
lg(path.join('C:', 'nihao', 'zhongguo/1', 'ren', '...'))
// path.normalize
lg(path.normalize('c:\\\\中国//125\\..\\!#$\\jd'))//不输出“...”也不输出“//”后的数
// path.parse
lg(path.parse(pathname))
// path.posix
lg(path.relative('C:\\abc\\123\\nihao', 'C:\\abc\\123\\zhongguo'))
lg(path.relative('C:\\abc\\12\\nihao', 'C:\\abc\\123\\zhongguo'))
// path.resolve
lg(path.resolve('C:\\abc\\123\\nihao','zhongguo','./ren'))//如果最后是相对路径返回前一个路径+该相对路径
lg(path.resolve('C:\\abc\\123\\nihao','./zhongguo','./ren'))//如果最后是相对路径返回前一个路径+该相对路径
lg(path.resolve('C:\\abc\\123\\nihao','./zhongguo','c:\\123'))//如果最后是绝对路径返回该绝对路径
lg(path.resolve('C:\\abc\\123\\nihao','c:\\123','./zhongguo'))
lg(path.resolve('C:\\abc\\123\\nihao','c:\\123','./zhongguo','c:\\678'))//如果有绝对路径以最后一个绝对路径为准+后面的相对路径
// path.sep
lg(pathname.split(path.sep))//分割路径成数组