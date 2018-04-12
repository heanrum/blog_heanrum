//For submit articles
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录如：/Tmall/index.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
tinymce.init({
    selector:'#content',
    codesample_languages: [
        {text: 'HTML/XML', value: 'markup'},
        {text: 'JavaScript', value: 'javascript'},
        {text: 'CSS', value: 'css'},
        {text: 'PHP', value: 'php'},
        {text: 'Ruby', value: 'ruby'},
        {text: 'Python', value: 'python'},
        {text: 'Java', value: 'java'},
        {text: 'C', value: 'c'},
        {text: 'C#', value: 'csharp'},
        {text: 'C++', value: 'cpp'}
    ],
    directionality:'ltr',
    language:'zh_CN',
    height:400,
    plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor imageupload',
            'codesample',
    ],

    imageupload_url: curWwwPath.substring(0,pos)+'/admin/upload_image', //图片上传地址
    convert_urls: false,
    toolbar: 'insertfile undo redo cut | \
    styleselect | \
    bold italic | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | \
    link image | \
    preview media fullpage | \
    forecolor backcolor |\
    codesample fontsizeselect fullscreen imageupload',
    fontsize_formats: '10pt 12pt 14pt 18pt 24pt 36pt',
    nonbreaking_force_tab: true
});

//For add plugin
tinymce.init({
    selector: '#pluginContent',
    directionality:'ltr',
    language:'zh_CN',
    plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'save table contextmenu directionality emoticons template paste textcolor',
            'codesample',
    ],
});
