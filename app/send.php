<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$address = $_POST['address'];
$days = $_POST['days'];
$program = $_POST['program'];
$delivery = $_POST['delivery'];
$payment = $_POST['payment'];
$plastic = $_POST['plastic'];
$find = $_POST['find'];
$wishes = $_POST['wishes'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Заявка из сайта";
$body = "
<h2>Новая заявка</h2>
Имя: <b>$name</b><br><br>
Телефон: <b>$phone</b><br><br>
E-mail: <b>$email</b><br><br>
Адрес доставки: <b>$address</b><br><br>
Количество дней заказа: <b>$days</b><br><br>
Програма питания: <b>$program</b><br><br>
Время доставки: <b>$delivery</b><br><br>
Способ оплаты: <b>$payment</b><br><br>
Пластиковые приборы: <b>$plastic</b><br><br>
Откуда узнали о нас: <b>$find</b><br><br>
Пожелания:<br> <b>$wishes</b><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.ukr.net'; // SMTP сервера вашей почты
    $mail->Username   = 'tes15uk@ukr.net'; // Логин на почте
    $mail->Password   = 'j92x0MDDtevWdaT3'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('tes15uk@ukr.net', 'FoodBalance_Site'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('food.balance.delivery@gmail.com');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);