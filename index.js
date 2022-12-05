function checkuspas()
{
  let usname =document.getElementById("userName").value;
  let pas=document.getElementById("pass").value;
  if(usname=="Admin" && pas=="1234567"){
    window.location="editlist.html";
  }else{
    alert("please enter valid user name and password");
    document.getElementById("userName").value="";
    document.getElementById("pass").value="";
  }
}
function onlyView()
{
  document.getElementById("logIn").style.display="none";


  var a=JSON.parse(localStorage.getItem('titleL'));
  var b=JSON.parse(localStorage.getItem('authorL'));
  var c=JSON.parse(localStorage.getItem('isbnL'));
  if(a==null&&b==null&&c==null){
    document.getElementById("onlyV").innerHTML="<h3>No data</h3>";

  }else{
    var title1=JSON.parse(localStorage.getItem('titleL'));
    var author1=JSON.parse(localStorage.getItem('authorL'));
    var isbn1=JSON.parse(localStorage.getItem('isbnL'));
    var show1="";
    document.getElementById("onlyV").innerHTML=show1;
    show1="<h2>BOOK LIST</h2><table><tr><th>S.No</th><th>Book Name</th><th>Author</th><th>ISBN</th></tr>";
    for(let i=0;i<title1.length;i++){
      show1+="<tr>"+"<td>"+(i+1)+"</td>"+"<td>"+title1[i]+"</td><td>"+author1[i]+"</td><td>"+isbn1[i]+"</td>"+"</tr>";
    }
    show1+="</table>";
    console.log(show1);
    document.getElementById("onlyV").innerHTML=show1;
  }
}
