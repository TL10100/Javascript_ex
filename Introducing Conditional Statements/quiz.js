var language = prompt('你说哪一国语言？');
if (language === '中文' ) {
    document.write('<p>真巧，我也是中国人</p>');
} else {
    document.write('<p>' + language + ' ，这是一门美妙的语言，南京欢迎您！</p>');
}