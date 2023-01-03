document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap elemen pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //  Jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(()=>alert("DRAW"), 500)
    }
    
    // Jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        // alert("KOMPUTER WIN");
        setTimeout(()=>alert("KOMPUTER WIN"), 500)
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        // alert("KOMPUTER WINN");
        setTimeout(()=>alert("KOMPUTER WINN"), 500)
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        // alert("KOMPUTER WINNN");
        setTimeout(()=>alert("KOMPUTER WINNN"), 500)
    }

    // Jika pilihan user menang
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        // alert("USER WIN");
        setTimeout(()=>alert("USER WIN"), 500)
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        // alert("USER WINN");
        setTimeout(()=>alert("USER WINN"), 500)
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        // alert("USER WINNN");
        setTimeout(()=>alert("USER WINNN"), 500)
    }
}