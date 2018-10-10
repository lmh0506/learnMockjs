const Mock = require('mockjs')

const Random = Mock.Random
// 随机的整数 参数 为min(随机自然数最小值), max（随机自然数最大值）
const len = Random.integer(10, 100)
let data = []

// 如果传入了 'lower' 或 'upper'、'number'、'symbol'，表示从内置的字符池从选取
// {
//   lower: "abcdefghijklmnopqrstuvwxyz",
//   upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   number: "0123456789",
//   symbol: "!@#$%^&*()[]"
// }

for (let i = 0; i < len; i++) {
  data.push({
    id: i + 1,
    // 随机的日期
    time: Random.date('yyyy-MM-dd hh-mm-ss'),
    // 时间戳
    timestamp: Random.date('T'),
    'flag|1': true,
    flag2: Random.boolean(),
    // 随机自然数  参数 为min(随机自然数最小值), max（随机自然数最大值）
    natural: Random.natural(),
    // 随机浮点数  参数 为min(整数部分最小值), max（整数部分最大值）dmin(小数长度最小值), dmax（小数长度最大值）
    float: Random.float(10, 1000, 0, 10),
    // 从字符池中随机取一个字符返回
    character: Random.character(),
    // 从字符池中随机从某种类型取一个字符返回  如果传入的字符串不为lower，upper，number，symbol则从传入的字符串中取
    characterPool: Random.character('symbol'),
    // 从字符池中随机拼接字符串
    string: Random.string(),
    // 从字符池中随机拼接字符串 如果传入的字符串不为lower，upper，number，symbol则从传入的字符串中取
    // Random.string()
    // Random.string( length )
    // Random.string( pool, length )
    // Random.string( min, max )
    // Random.string( pool, min, max )
    stringPool: Random.string('lower', 5, 15),
    // Random.image()
    // Random.image( size )
    // Random.image( size, background )
    // Random.image( size, background, text )
    // Random.image( size, background, foreground, text )
    // Random.image( size: 图片大小, background：背景色, foreground： 前景色, format：图片格式, text：文本)
    // 随机颜色
    image: Random.image('200x100', Random.color(), Random.color(), 'png', Random.string('lower', 5, 15)),
    // Random.dataImage()
    // Random.dataImage( size )
    // Random.dataImage( size, text )
    base64: Random.dataImage('200x100', Random.string('lower', 5, 15)),
    // 随机生成一段文本 参数是句子个数或范围
    paragraph: Random.paragraph(1),
    // 随机生成一段中文文本。参数是句子个数或范围
    cparagraph: Random.cparagraph(1),
    // 常见英文名
    first: Random.first(),
    // 常见英文姓
    last: Random.last(),
    // 常见英文姓名
    name: Random.name(),
    // 常见中文名
    cfirst: Random.cfirst(),
    // 常见中文姓
    clast: Random.clast(),
    // 常见中文姓名
    cname: Random.cname(),
    // 随机生成一个 URL。
    url: Random.url('http'),
    // 随机生成一个邮件地址。
    email: Random.email(),
    // 随机生成一个 IP 地址。
    ip: Random.ip(),
    // 随机生成一个（中国）大区。
    region: Random.region(),
    // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
    province: Random.province(),
    // 随机生成一个（中国）市。
    city: Random.city(),
    // 随机生成一个（中国）县。
    county: Random.county(),
    // 随机生成一个邮政编码（六位数字）
    zip: Random.zip(),
    // 随机生成一个 GUID。
    guid: Random.guid(),
    // 随机生成一个 18 位身份证。
    idcard: Random.id(),
    // 生成一个全局的自增整数。
    increment: Random.increment()
  })
}

Mock.mock('/test', 'post', data)

Mock.mock(/\/login\?.*/, 'get', opt => {
  console.log(opt)
  return {data}
})
