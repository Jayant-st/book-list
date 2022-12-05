var a=JSON.parse(localStorage.getItem('titleL'));
var b=JSON.parse(localStorage.getItem('authorL'));
var c=JSON.parse(localStorage.getItem('isbnL'));
var al=0;
var te=0;
if(a==null&&b==null&&c==null){
  var title1=[];
  var author1=[];
  var isbn1=[];
}else{
  var title1=JSON.parse(localStorage.getItem('titleL'));
  var author1=JSON.parse(localStorage.getItem('authorL'));
  var isbn1=JSON.parse(localStorage.getItem('isbnL'));
  viewData();

}
document.getElementById("add1").addEventListener("click",function(){
  // localStorage.clear();
  if(al===1){
    title1[te]=document.getElementById("titleh").value;
   author1[te]=document.getElementById("authorh").value;
   isbn1[te]=document.getElementById("isbnh").value;
   al=0;
 }else{
   title1.push(document.getElementById("titleh").value);
   author1.push(document.getElementById("authorh").value);
   isbn1.push(document.getElementById("isbnh").value);
 }
  saveData();
  viewData();
});

function saveData(){
  localStorage.clear();
    localStorage.setItem('titleL',JSON.stringify(title1));
    localStorage.setItem('authorL',JSON.stringify(author1));
    localStorage.setItem('isbnL',JSON.stringify(isbn1));
}

// for view
function viewData() {
  var show1="";
  document.getElementById("viewSection").innerHTML=show1;
  show1="<table><tr><th>S.No</th><th>Book Name</th><th>Author</th><th>ISBN</th><th>Delete</th><th>Edit</th></tr>";
  for(let i=0;i<title1.length;i++){
    show1+="<tr>"+"<td>"+(i+1)+"</td>"+"<td>"+title1[i]+"</td><td>"+author1[i]+"</td><td>"+isbn1[i]+"</td>"+"<td><span class='del1' onclick='deleteData("+i+")'>delete</span></td>"+"<td><span class='del1' onclick='editData("+i+")'>edit</span></td>"+"</tr>";
  }
  show1+="</table>";
  document.getElementById("viewSection").innerHTML=show1;
}
function deleteData(del){
  title1.splice(del,1);
  author1.splice(del,1);
  isbn1.splice(del,1);
  saveData();
  viewData();
}
function editData(edi){
  document.getElementById("titleh").value=title1[edi];
 document.getElementById("authorh").value=author1[edi];
 document.getElementById("isbnh").value=isbn1[edi];
  al=1;
  te=edi;
 saveData();
 viewData();
}
