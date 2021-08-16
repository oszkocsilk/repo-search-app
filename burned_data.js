var repos= new Array();
        for(var i=0; i<20; i++){
            repos[i] = new Array("Name"+i, "5","5","5","5", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "JavaScript", "Repo Full name");
        }
        repos[20] = new Array("20.repo name", "4","5","5","3", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "JavaScript", "Repo Full name");
        repos[21] = new Array("Repo name", "5","4","5","2", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "CSS", "Repo Full name");
        repos[22] = new Array("name", "5","5","3","1", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "HTML", "Repo Full name");
        repos[23] = new Array("new repo name", "2","5","1","0", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "JavaScript", "Repo name2");
        repos[24] = new Array("epo name", "1","1","1","0", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "CSS", "Repo Full name");
        repos[25] = new Array("repo30", "2","9","5","3", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "JavaScript", "Repo Full name");
        repos[26] = new Array("_Repo name", "5","4","5","2", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "CSS", "Repo Full name");
        repos[27] = new Array("repo", "3","4","7","1", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "HTML", "Repo Full name");
        repos[28] = new Array("repo name new", "3","8","1","0", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "JavaScript", "Repo Full");
        repos[29] = new Array("REpo name", "3","9","1","0", "Repo description text here...", "2019.01.20.","2021.05.24.","John Doe", "CSS", "Fulll name");

    var current_page = 1;
    var records_per_page = 10;


    function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    current_page++;
    changePage(current_page);
    
}

function reset(){
document.getElementById("myInput").value=null;
document.getElementById("name_ckbox").checked;
document.getElementById("desc_ckbox").checked=false;
document.getElementById("readme_ckbox").checked=false;
document.getElementById("sorting").style.display="none";
document.getElementById("pagination").style.display="none";
document.getElementById("mainTable").style.display="none";
document.getElementById("searchList").style.display="none";
document.getElementById("emptySearch").style.display="block";
resultRepos =[];



}

function checkBoxCounter(){
    var inputList =document.getElementsByClassName("checkbox");
    var numChecked = 0;

        for (var i = 0; i < inputList.length; i++) {
            if (inputList[i].type == "checkbox" && inputList[i].checked) {
                numChecked = numChecked + 1;
            }
        }
        if (numChecked < 1) {
            alert("Check minimum 1 checkbox!");
        return false;}
        return true;
}

function searchStart(){
    if(document.getElementById("myInput").value.length >2){
        if(checkBoxCounter()){
            select_values(document.getElementById("myInput").value);
        }
    }
    else{
        alert("Please type more characters to the searching area!")
    }
}

var resultRepos=new Array();


function select_values(input){
    resultRepos =[];
    for(var i=0; i<repos.length; i++){

        if(document.getElementById("name_ckbox").checked){


            if(repos[i][0].toUpperCase().includes(input.toUpperCase())){

                resultRepos.push(repos[i]);

            }
            else if(document.getElementById("desc_ckbox").checked){

                if(repos[i][5].toUpperCase().includes(input.toUpperCase())){

                    resultRepos.push(repos[i]);

                }
            }
            else if(document.getElementById("readme_ckbox").checked){


                if(repos[i][8].toUpperCase().includes(input.toUpperCase())){

                    resultRepos.push(repos[i]);

                }
            }
        }

        else if(document.getElementById("desc_ckbox").checked){

            if(repos[i][5].toUpperCase().includes(input.toUpperCase())){

                resultRepos.push(repos[i]);

            }
        }
        else if(document.getElementById("readme_ckbox").checked){


            if(repos[i][10].toUpperCase().includes(input.toUpperCase())){

                resultRepos.push(repos[i]);

            }
        }
        else if(document.getElementById("readme_ckbox").checked){


            if(repos[i][10].toUpperCase().includes(input.toUpperCase())){

                resultRepos.push(repos[i]);

            }
        }
        
    }
    chose_orderby();
}


function changePage(page)
{   

    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("searchList");
    var page_span = document.getElementById("page");
    var Maxpage_span= document.getElementById("Maxpage");
    var TotalResults =document.getElementById("totalResults");

    TotalResults.innerHTML=resultRepos.length;
    
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        var html = [
            '<table id="mainTable" style="undefined;table-layout: fixed; width: auto">',
                '<colgroup>',
                    '<col >',
                    '<col >',
                    '<col >',
                    '<col >',
                    '<col >',
                    '<col >',
                    '<col >',
                    '<col >',
                    '<col >',
                    '</colgroup>',
                    '<thead>',
                        '<tr>',
                            '<td id="Reponame">'+ resultRepos[i][0] +'</td>',
                            '<td id="stars">'+'Stars: '+ resultRepos[i][1] +'</td>',
                            '<td id="forks">'+'Forks:'+ resultRepos[i][2] +'</td>',
                            '<td  id="description" rowspan="2">'+ resultRepos[i][5] +'</td>',
                            '<td  class="languages" rowspan="2"></td>',
                            '<td class="languages" rowspan="2"><div>'+ resultRepos[i][9] +'</div></td>',
                            '<td class="dates">'+'Created at: '+ resultRepos[i][6] +'</td>',
                            '<td class="name" rowspan="2">'+'By: '+resultRepos[i][8] +'</td>',
                            '<td rowspan="2">'+ "picture" +'</td>',
                            '</tr>',
                            '<tr>',
                                '<td id="fullname">'+ resultRepos[i][10] +'</td>',
                                '<td  id="watchers">'+'Watchers: '+ resultRepos[i][3] +'</td>',
                                '<td id="issues">'+'Issues: '+ resultRepos[i][4] +'</td>',
                                '<td class="dates">'+'Updated at: '+ resultRepos[i][7] +'</td>',
                                '</tr>',
                                '</thead>',
                                '</table>'
        ].join("\n");
 $("#searchList").append(html);

 document.getElementById("sorting").style.display="inline-block";
 document.getElementById("pagination").style.display="block";
 document.getElementById("mainTable").style.display="table";
 document.getElementById("searchList").style.display="block";
 document.getElementById("emptySearch").style.display="none";

 Maxpage_span.innerHTML = numPages();

 if (page == numPages()) {
    btn_next.style.visibility = "hidden";
} else {
    btn_next.style.visibility = "visible";
}

page_span.innerHTML = page;

    }






    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }
}



function numPages()
{   
    return Math.ceil(resultRepos.length / records_per_page);
}

/*
window.onload = function() {
    changePage(1);
};*/

























function chose_orderby(){

    var desc_order = document.getElementById("desc_order").checked;

    var def_sort = document.getElementById("def_sort").checked;
    var star_sort = document.getElementById("star_sort").checked;


    if(desc_order){
        if(def_sort){
            orderby(0);
        }
        else if(star_sort){
            star_search(0);
        }
        else{
            fork_search(0);
        }
    }
    else{
        if(def_sort){
            orderby(1);
        }
        else if(star_sort){
            star_search(1);
        }
        else{
            fork_search(1);
        }
    }
}







function orderby(reverse){

    if(reverse==0){resultRepos.sort();}

    else{resultRepos.reverse();}
    
    changePage(1);
}

function star_search(reverse){
    resultRepos.sort((a,b) => a[1].toUpperCase().localeCompare(b[1].toUpperCase()));

    if(reverse==0){changePage(1);}

    else{
        resultRepos.reverse();
        changePage(1);
    }
};


function fork_search(reverse){
    resultRepos.sort((a,b) => a[2].toUpperCase().localeCompare(b[2].toUpperCase()));

    if(reverse==0){changePage(1);}

    else{
        resultRepos.reverse();
        changePage(1);
    }
};
      