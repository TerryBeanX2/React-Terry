import $ from 'jquery-ajax';

export default function (url, json, callback) {
    $.ajax({
        url:url,
        type:'post',
        dataType:'json',
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(json),
        success:function (data) {
            console.log(data)
            callback(data);
        },
        async:false
    })
}