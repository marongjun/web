<?php

$type=$_POST['search'];

if($type=='companyname'){
    echo "nokia,kone,google,facebook,linkin" ;
} elseif ($type=='fileds') {
    echo "IoT,Sensors,Chips,Electrical" ;
} elseif ($type=='status') {
    echo "Active,NDA,Procurement" ;
}


?>