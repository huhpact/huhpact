<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Bestellungen</title>
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
        
        .btn-danger {
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
        <a href="panel.html"><button class="Btn"><i class='bx bx-home-alt'></i>&nbsp; Admin Panel Overview</button></a>
    </header>
    <div class="container">
        <h1 class="admin">Admin Panel - Bestellungen</h1>
        <div class="content">
        <h2>Bestelldaten</h2>
        <table>
            <tr>
                <th>BestellID</th>
                <th>KundenID</th>
                <th>ProduktIDs</th>
                <th>Anzahl Gesamtprodukte</th>
                <th>Gesamtbetrag</th>
            </tr>
            <?php
            $pdo = new PDO('mysql:host=localhost;dbname=magcanna', 'root', '0911');
            $stmt = $pdo->query('SELECT * FROM commandes');
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>";
                echo "<td>".$row['BestellID']."</td>";
                echo "<td>".$row['KundenID']."</td>";
                echo "<td>".$row['ProduktIDs']."</td>";
                echo "<td>".$row['Anzahl Gesamtprodukte']."</td>";
                echo "<td>".$row['Gesamtbetrag']."</td>";
                echo "</tr>";
            }
            ?>
        </table>
        <form method="post">
                <button class="page_act" type="submit" name="refresh_page">Aktualisieren</button>
            </form>
    </div>
    <div class="content">
        <h2>Bestellung bearbeiten</h2>
        <form method="post">
            <input type="text" id="edit_id" name="edit_id" placeholder="Bestell-ID eingeben">
            <button type="submit" name="fetch_order">Bestellung bearbeiten</button>
        </form>

        <?php
        if(isset($_POST['fetch_order'])) {
            $edit_id = $_POST['edit_id'];
            $stmt = $pdo->prepare('SELECT * FROM commandes WHERE BestellID = ?');
            $stmt->execute([$edit_id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            ?>
            <form method="post">
                <input type="hidden" name="edit_id" value="<?php echo $row['BestellID']; ?>">
                <label for="customer_id">KundenID:</label>
                <input type="text" id="customer_id" name="customer_id" value="<?php echo $row['KundenID']; ?>"><br>
                <label for="product_ids">ProduktIDs:</label>
                <input type="text" id="product_ids" name="product_ids" value="<?php echo $row['ProduktIDs']; ?>"><br>
                <label for="total_quantity">Anzahl Gesamtprodukte:</label>
                <input type="text" id="total_quantity" name="total_quantity" value="<?php echo $row['Anzahl Gesamtprodukte']; ?>"><br>
                <label for="total_amount">Gesamtbetrag:</label>
                <input type="text" id="total_amount" name="total_amount" value="<?php echo $row['Gesamtbetrag']; ?>"><br>
                <button type="submit" name="update_order">Bestellung aktualisieren</button>
            </form>
        <?php } ?>

        <?php
        if(isset($_POST['update_order'])) {
            $update_id = $_POST['edit_id'];
            $stmt = $pdo->prepare('UPDATE commandes SET KundenID=?, ProduktIDs=?, `Anzahl Gesamtprodukte`=?, Gesamtbetrag=? WHERE BestellID=?');
            $stmt->execute([$_POST['customer_id'], $_POST['product_ids'], $_POST['total_quantity'], $_POST['total_amount'], $update_id]);
            echo "<p class='act'>Bestelldaten aktualisiert!</p>";
        }
        ?>
    </div>
    <div class="content">
        <h2>Bestellung löschen</h2>
        <form method="post">
            <input type="text" id="delete_id" name="delete_id" placeholder="Bestell-ID eingeben">
            <button type="submit" name="delete_order" class="btn-danger">Bestellung löschen</button>
        </form>

        <?php
        if(isset($_POST['delete_order'])) {
            $delete_id = $_POST['delete_id'];
            $stmt = $pdo->prepare('DELETE FROM commandes WHERE BestellID = ?');
            $stmt->execute([$delete_id]);
            echo "<p class='act'>Bestellung gelöscht!</p>";
        }
        ?>
    </div>
    <div class="content">
        <h2>Neue Bestellung hinzufügen</h2>
        <form method="post">
            <input type="text" id="new_customer_id" name="new_customer_id" placeholder="KundenID"><br>
            <input type="text" id="new_product_ids" name="new_product_ids" placeholder="ProduktIDs"><br>
            <input type="text" id="new_total_quantity" name="new_total_quantity" placeholder="Anzahl Gesamtprodukte"><br>
            <input type="text" id="new_total_amount" name="new_total_amount" placeholder="Gesamtbetrag"><br>
            <button type="submit" name="add_order">Bestellung hinzufügen</button>
        </form>
    

        <?php
        if(isset($_POST['add_order'])) {
            $stmt = $pdo->prepare('INSERT INTO commandes (KundenID, ProduktIDs, `Anzahl Gesamtprodukte`, Gesamtbetrag) VALUES (?, ?, ?, ?)');
            $stmt->execute([$_POST['new_customer_id'], $_POST['new_product_ids'], $_POST['new_total_quantity'], $_POST['new_total_amount']]);
            echo "<p class='act'>Neue Bestellung hinzugefügt!</p>";
        }
        ?>
    </div>
    </div>
</body>
</html>
