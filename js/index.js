        //    For room selection
        //    For selection singlebedroom
       singlebedBook = () => {
            document.getElementById("room").value = "economic"
        }

        //    For selection singlebedroom
        doublebedBook = () => {
            document.getElementById("room").value = "Deluxe"
        }

         //    For selection singlebedroom
        triplebedBook = () => {
            document.getElementById("room").value = "Exclusive"
        }

        //    For selection singlebedroom
        quadbedBook = () => {
            document.getElementById("room").value = "superDeluxe"
        }



        // After Booking the room confirmation.
        booked = () => {
            var x = document.getElementById("name").value;
            var y = document.getElementById("tel").value;
            var z = document.getElementById("room").value;
            var j = document.getElementById("date").value;

            document.getElementById("formtotxt").innerHTML = (`Thank you for choosing us. ${x} <br>Your room has been booked with id: ODR/223023/12314<br>Room Type: ${z}<br>On: ${j}<br>kindly keep this refence id with you It'll be asked at time of check in.<br><br><i>Payment will be done at the time of check in.</i>`);
            document.getElementById("formtotxt").style.textAlign = "center"
        }
