const navclassA = document.querySelectorAll(".A");

 for (let i=0; i < navclassA.length; i++){                               

            navclassA[i].addEventListener('mouseover',()=>
                            {
                            navclassA[i].style.backgroundColor = "grey";
                            }
                                        )

             navclassA[i].addEventListener('mouseout',()=>
                            {
                            navclassA[i].style.backgroundColor = "rgba(99,173,232, 0.72)";
                            }
                                       )  
                           
                                         }
              

