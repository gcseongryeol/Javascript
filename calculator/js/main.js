function getHistory() {
    return document.querySelector('#history-value').innerText;
}

function printHistory(num) {
    document.querySelector('#history-value').innerText = num;
}

function getOutput() {
    return document.querySelector('#output-value').innerText;
}

function printOutput(num) {
    if(num == "") {
        document.querySelector('#output-value').innerText = getFormattedNumber(num);
    } else {
        document.querySelector('#output-value').innerText = getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num) {
    if(num == '-') {
        return '';
    }
    var n = Number(num);
    var value = n.toLocaleString('en'); // 사용자의 문화권에 맞는 시간표기법으로 년, 월, 일, 시간을 리턴
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,'')) // 특정문자 제거 (,)
}

var operator = document.querySelectorAll('.operator'); // querySelectorAll은 일치하는 모든 요소를 반환, 반환 타입은 리스트
for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if(this.id == 'clear') {
            printHistory('');
            printOutput('');
        }
        else if(this.id == 'backspace') {
            var output = reverseNumberFormat(getOutput()).toString();
            if(output) {
                output = output.substr(0, output.length-1); // substr은 문자열에서 특정한 구간의 문자열 추출 (start, length) start와 length사이의 문자열을 반환한다.
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if(output == '' && history != '') {
                if(isNaN(history[history.length-1])) { // isNaN은 어떤 값이 NaN인지 판별한다.
                    history = history.substr(0, history.length-1);
                }
            }
            if(output != '' || history !='') {
                output = output == '' ? output : reverseNumberFormat(output);
                history = history + output;
                if(this.id == '=') {
                    var result = eval(history); // eval은 문자로 표현된 javascript 코드를 실행하는 함수
                    printOutput(result);
                    printHistory('');
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput('');
                }
            }
        }
    });
}

var number = document.querySelectorAll('.number'); 
for(var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = reverseNumberFormat(getOutput());
        if(output != NaN) { // output이 number 이라면
            output = output + this.id;
            printOutput(output);
        }
    });
}



