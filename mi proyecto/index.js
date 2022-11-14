const navclassA = document.querySelectorAll(".A");

 for (let i=0; i < navclassA.length; i++) {                               

            navclassA[i].addEventListener('mouseover',()=>
                            {
                            navclassA[i].style.backgroundColor = "white";
                            }
                                        )

             navclassA[i].addEventListener('mouseout',()=>
                            {
                            navclassA[i].style.backgroundColor =  "rgb(235, 188, 235)";
                            }
                                           )  
                           
                        }
              

