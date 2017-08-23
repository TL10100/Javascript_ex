
var rightCount = 0;  //定义初始回答正确的个数
var question1 = prompt('太阳和月亮，哪一个离地球更近？');
if( question1 === '月亮') {
    alert('不错，请听下一题');
    rightCount += 1;
    var question2 = prompt('2008年奥运会在哪个城市举行？');
    if ( question2 === '北京') {
        rightCount += 1;
        alert('真棒，下一题请保持');
        var question3 = prompt('1+2+3+4+5...+98+99+100的和是多少？');
        if (question3 === '5050') {
            rightCount += 1;
            alert('小学奥数成绩不错哦，再保持下去');
            var question4 = prompt('上一道题目计算公式和哪个数学家有关？');
            if ( question4 === '高斯') {
                rightCount += 1;
                alert('太棒了，还有最有一题');
                var question5 = prompt('王力宏和周杰伦哪个是亚洲歌王？');
                if ( question5 === '王力宏' || question5 === '周杰伦') {
                    alert('完美！你全部答对啦');

                }
            }
        }
    }
} else {
    alert('有点可惜，下一题努力');
    var question2 = prompt('2008年奥运会在哪个城市举行？');

}

var question2 = prompt('2008年奥运会在哪个城市举行？');

var question3 = prompt('1+2+3+4+5...+98+99+100的和是多少？');

var question4 = prompt('上一道题目计算公式和哪个数学家有关？');

var question5 = prompt('王力宏和周杰伦哪个是亚洲歌王？');