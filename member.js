function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberError = document.getElementById("memberError");
    var memberErrorText = "";
    var memberErrorFlag = false;
    if (memberValue == "") {
        memberErrorText = "Please enter your member";
        memberErrorFlag = true;
    }
    else if (memberValue.length < 5) {
        memberErrorText = "Please enter your member more than 5 characters";
        memberErrorFlag = true;
    }
    else if (memberValue.length > 20) {
        memberErrorText = "Please enter your member less than 20 characters";
        memberErrorFlag = true;
    }
    if (memberErrorFlag) {
        memberError.innerHTML = memberErrorText;
        memberError.style.display = "block";
        member.style.border = "1px solid red";
        return false;
    }
    else {
        memberError.innerHTML = "";
        memberError.style.display = "none";
        member.style.border = "1px solid #ccc";
        return true;
    }
}