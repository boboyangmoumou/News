var fs = require('fs')
var locallist = '../../public/test.json'

module.exports = {
  summary: 'a rule to modify response',
  *beforeSendRequest(requestDetail) {
    if (requestDetail.url.indexOf('https://search.weixin.qq.com/cgi-bin/searchweb/wxindex/querywxindexgroup') === 0) {
      let resultList = []
      resultList.push('{' + requestDetail.requestOptions.path + '},')
      console.log(resultList)
      fs.appendFile(locallist, [resultList], function (err) {
        if (err) {
          console.log(err)
        }
      })
    }
  },
  *beforeSendResponse(requestDetail, responseDetail) {
    const {requestOptions} = requestDetail
    if (requestDetail.url.indexOf('https://search.weixin.qq.com/cgi-bin/searchweb/wxindex/querywxindexgroup') === 0) {
      const newResponse = responseDetail.response
    // console.log(newResponse)
    //   console.log(`${newResponse.body}`)
    }
  },
  beforeDealHttpRequest(requestDetai) {
    return true
  }
}
