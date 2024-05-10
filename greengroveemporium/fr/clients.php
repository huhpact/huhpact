<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Clients</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="icon" type="images/x-icon" href="logo.png">
    <style>
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #001220; 
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
        }
        h1, h2 {
            color: #001220;
            margin-bottom: 20px;
        }
        .content {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 5px;
            overflow-x: auto; 
            border-color: black;
            background-color: white;
            box-shadow: 0px 0px 26px -7px white;
        }
        table {
            width: 100%; 
            border-collapse: collapse;
            white-space: nowrap; 
        }
        th, td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            color: #001220;
;
        }
        th {
            background-color: #f2f2f2;
        }
        form {
            margin-bottom: 20px;
        }
        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
            border: 1px solid #ddd;
            border-radius: 3px;
        }
        button {
            padding: 10px 20px;
            background-color: #001220;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        
        .btn-del {
            background-color: #001220;
        }
       

        .admin {
            color: white;
        }
       .Btn {
        display: inline-block;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        padding: 2px 16px;
        height: 38px;
        min-width: 96px;
        min-height: 38px;
        border: none;
        color: #fff;
        background-color: rgb(88, 101, 242);
        transition: background-color .17s ease,color .17s ease;
        margin-top: 30px;
        margin-left: 30px;
         }
        .Btn:hover {
         background-color: rgb(71, 82, 196);
        }
        
        .page_act {
            margin-top: 5px;
        }

        .act {
            color: #001220;
        }

    </style>
</head>
<body>
    <header> 
        <a href="panel.html"><button class="Btn"><i class='bx bx-home-alt'></i>&nbsp; Présentation du panneau d'administration</button></a>
    </header>
    <div class="container">
        <h1 class="admin">Admin Panel - Clients</h1>
        <div class="content">
        <h2>Données client</h2>
        <table>
            <tr>
                <th>ID Client</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>E-Mail</th>
                <th>Numéro de téléphone</th>
                <th>Rue</th>
                <th>Numéro de maison</th>
                <th>Code Postal</th>
                <th>Lieu de résidence</th>
                <th>Pays</th>
            </tr>
            <?php
            $pdo = new PDO('mysql:host=localhost;dbname=magcanna', 'root', '0911');
            $stmt = $pdo->query('SELECT * FROM clients');
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>";
                echo "<td>".$row['KundenID']."</td>";
                echo "<td>".$row['Vorname']."</td>";
                echo "<td>".$row['Nachname']."</td>";
                echo "<td>".$row['E-Mail']."</td>";
                echo "<td>".$row['Telefonnummer']."</td>";
                echo "<td>".$row['Strasse']."</td>";
                echo "<td>".$row['Hausnummer']."</td>";
                echo "<td>".$row['Postleitzahl']."</td>";
                echo "<td>".$row['Wohnort']."</td>";
                echo "<td>".$row['Land']."</td>";
                echo "</tr>";
            }
            ?>
        </table>
        <form method="post">
                <button class="page_act" type="submit" name="refresh_page">Actualiser</button>
            </form>
    </div>
    <div class="content">
        <h2>Modifier Client</h2>
        <form method="post">
            <input type="text" id="edit_id" name="edit_id" placeholder="Saisir ID Client">
            <button type="submit" name="fetch_customer">Modifier Client</button>
        </form>

        <?php
        if(isset($_POST['fetch_customer'])) {
            $edit_id = $_POST['edit_id'];
            $stmt = $pdo->prepare('SELECT * FROM clients WHERE KundenID = ?');
            $stmt->execute([$edit_id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            ?>
            <form method="post">
                <input type="hidden" name="edit_id" value="<?php echo $row['KundenID']; ?>">
                <label for="firstname">Prénom:</label>
                <input type="text" id="firstname" name="firstname" value="<?php echo $row['Vorname']; ?>"><br>
                <label for="lastname">Nom:</label>
                <input type="text" id="lastname" name="lastname" value="<?php echo $row['Nachname']; ?>"><br>
                <label for="email">E-Mail:</label>
                <input type="text" id="email" name="email" value="<?php echo $row['E-Mail']; ?>"><br>
                <label for="phone">Numéro de téléphone:</label>
                <input type="text" id="phone" name="phone" value="<?php echo $row['Telefonnummer']; ?>"><br>
                <label for="street">Rue:</label>
                <input type="text" id="street" name="street" value="<?php echo $row['Strasse']; ?>"><br>
                <label for="housenumber">Numéro de maison:</label>
                <input type="text" id="housenumber" name="housenumber" value="<?php echo $row['Hausnummer']; ?>"><br>
                <label for="zipcode">Code Postal :</label>
                <input type="text" id="zipcode" name="zipcode" value="<?php echo $row['Postleitzahl']; ?>"><br>
                <label for="city">Lieu de résidence:</label>
                <input type="text" id="city" name="city" value="<?php echo $row['Wohnort']; ?>"><br>
                <label for="country">Pays:</label>
                <input type="text" id="country" name="country" value="<?php echo $row['Land']; ?>"><br>
                <button type="submit" name="update_customer">Mettre Client à jour</button>
            </form>
        <?php } ?>

        <?php
        if(isset($_POST['update_customer'])) {
            $update_id = $_POST['edit_id'];
            $stmt = $pdo->prepare('UPDATE clients SET Vorname=?, Nachname=?, `E-Mail`=?, Telefonnummer=?, Strasse=?, Hausnummer=?, Postleitzahl=?, Wohnort=?, Land=? WHERE KundenID=?');
            $stmt->execute([$_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['phone'], $_POST['street'], $_POST['housenumber'], $_POST['zipcode'], $_POST['city'], $_POST['country'], $update_id]);
            echo "<p class='act'>données client mises à jour!</p>";
        }
        ?>
    </div>
    <div class="content">
        <h2>Supprimer Client</h2>
        <form method="post">
            <input type="text" id="delete_id" name="delete_id" placeholder="Saisir ID Client">
            <button type="submit" name="delete_customer" class="btn-del">Supprimer Client</button>
        </form>

        <?php
        if(isset($_POST['delete_customer'])) {
            $delete_id = $_POST['delete_id'];
            $stmt = $pdo->prepare('DELETE FROM clients WHERE KundenID = ?');
            $stmt->execute([$delete_id]);
            echo "<p class='act'>Client supprimé!</p>";
        }
        ?>
    </div>
    <div class="content">
        <h2>Ajouter nouveau client</h2>
        <form method="post">
            <input type="text" id="new_firstname" name="new_firstname" placeholder="Prénom"><br>
            <input type="text" id="new_lastname" name="new_lastname" placeholder="Nom"><br>
            
            <input type="text" id="new_email" name="new_email" placeholder="E-Mail"><br>
            
            <input type="text" id="new_phone" name="new_phone" placeholder="Numéro de téléphone"><br>
            
            <input type="text" id="new_street" name="new_street" placeholder="Rue"><br>
            
            <input type="text" id="new_housenumber" name="new_housenumber" placeholder="Numéro de maison"><br>
            
            <input type="text" id="new_zipcode" name="new_zipcode" placeholder="Code Postal "><br>
            
            <input type="text" id="new_city" name="new_city" placeholder="Lieu de résidence"><br>
            
            <input type="text" id="new_country" name="new_country" placeholder="Pays"><br>
            <button type="submit" name="add_customer">Ajouter nouveau client</button>
        </form>
    

        <?php
        if(isset($_POST['add_customer'])) {
            $stmt = $pdo->prepare('INSERT INTO clients (Vorname, Nachname, `E-Mail`, Telefonnummer, Strasse, Hausnummer, Postleitzahl, Wohnort, Land) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
            $stmt->execute([$_POST['new_firstname'], $_POST['new_lastname'], $_POST['new_email'], $_POST['new_phone'], $_POST['new_street'], $_POST['new_housenumber'], $_POST['new_zipcode'], $_POST['new_city'], $_POST['new_country']]);
            echo "<p class='act'>Nouveau client ajouté!</p>";
        }
        ?>
    </div>
    </div>
</body>
</html>
