<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Produits</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="icon" type="images/x-icon" href="logo.png">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        body {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #001220; 
            color: white;
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

        .act {
            color: #001220;
        }

        .page_act {
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <header> 
        <a href="panel.html"><button class="Btn"><i class='bx bx-home-alt'></i>&nbsp; Présentation du panneau d'administration</button></a>
    </header>
    <div class="container">
        <h1 class="admin">Admin Panel - Produits</h1>
        <div class="content">
        <h2>Données Produits</h2>
        <table>
            <tr>
                <th>ID Produit</th>
                <th>Nom Produit</th>
                <th>Prix</th>
                <th>Disponibilité</th>
                <th>Origine</th>
            </tr>
            <?php
            $pdo = new PDO('mysql:host=localhost;dbname=magcanna', 'root', '0911');
            $stmt = $pdo->query('SELECT * FROM produits');
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>";
                echo "<td>".$row['ProduktID']."</td>";
                echo "<td>".$row['Produktname']."</td>";
                echo "<td>".$row['Preis']."</td>";
                echo "<td>".$row['Verfuegbarkeit']."</td>";
                echo "<td>".$row['Herkunft']."</td>";
                echo "</td>";
                echo "</tr>";
            }
            ?>
        </table>
        <form method="post">
                <button class="page_act" type="submit" name="refresh_page">Actualiser</button>
            </form>
    </div>
    <div class="content">
        <h2>Modifier produits</h2>
        <form method="post">
            <input type="text" id="edit_id" name="edit_id" placeholder="Saisir ID Produit">
            <button type="submit" name="fetch_product">Modifier produit</button>
        </form>

        <?php
        if(isset($_POST['fetch_product'])) {
            $edit_id = $_POST['edit_id'];
            $stmt = $pdo->prepare('SELECT * FROM produits WHERE ProduktID = ?');
            $stmt->execute([$edit_id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            ?>
            <form method="post">
                <input type="hidden" name="edit_id" value="<?php echo $row['ProduktID']; ?>">
                <label for="productname">Nom Produit:</label>
                <input type="text" id="productname" name="productname" value="<?php echo $row['Produktname']; ?>"><br>
                <label for="price">Prix:</label>
                <input type="text" id="price" name="price" value="<?php echo $row['Preis']; ?>"><br>
                <label for="availability">Disponibilité:</label>
                <input type="text" id="availability" name="availability" value="<?php echo $row['Verfuegbarkeit']; ?>"><br>
                <label for="origin">Origine:</label>
                <input type="text" id="origin" name="origin" value="<?php echo $row['Herkunft']; ?>"><br>
                <button type="submit" name="update_product">Produit mis à jour</button>
            </form>
        <?php } ?>

        <?php
        if(isset($_POST['update_product'])) {
            $update_id = $_POST['edit_id'];
            $stmt = $pdo->prepare('UPDATE produits SET Produktname=?, Preis=?, Verfuegbarkeit=?, Herkunft=? WHERE ProduktID=?');
            $stmt->execute([$_POST['productname'], $_POST['price'], $_POST['availability'], $_POST['origin'], $update_id]);
            echo "<p class='act'>Données produit mises à jour!</p>";
        }
        ?>
    </div>
    <div class="content">
        <h2>Supprimer Produit</h2>
        <form method="post">
            <input type="text" id="delete_id" name="delete_id" placeholder="Saisir ID Produit">
            <button type="submit" name="delete_product" class="btn-del">Supprimer Produit</button>
        </form>

        <?php
        if(isset($_POST['delete_product'])) {
            $delete_id = $_POST['delete_id'];
            $stmt = $pdo->prepare('DELETE FROM produits WHERE ProduktID = ?');
            $stmt->execute([$delete_id]);
            echo "<p class='act'>Produit supprimé!</p>";
        }
        ?>
    </div>
    <div class="content">
        <h2>Ajouter nouveau produit</h2>
        <form method="post">
            <input type="text" id="new_productname" name="new_productname" placeholder="Nom Produit"><br>
            <input type="text" id="new_price" name="new_price" placeholder="Prix"><br>
            <input type="text" id="new_availability" name="new_availability" placeholder="Disponibilité"><br>
            <input type="text" id="new_origin" name="new_origin" placeholder="Origine"><br>
            <button type="submit" name="add_product">Ajouter Produit</button>
        </form>

        <?php
        if(isset($_POST['add_product'])) {
            $stmt = $pdo->prepare('INSERT INTO produits (Produktname, Preis, Verfuegbarkeit, Herkunft) VALUES (?, ?, ?, ?)');
            $stmt->execute([$_POST['new_productname'], $_POST['new_price'], $_POST['new_availability'], $_POST['new_origin']]);
            echo "<p class='act'>Nouveau Produit ajouté</p>";
        }
        ?>
    </div>
    </div>
</body>
</html>