<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="../../css/main_style.css">
		<link rel="stylesheet" type="text/css" href="../../css/log_in.css">
		<link href="https://fonts.googleapis.com/css?family=Italianno|Lato|Josefin+Sans" rel="stylesheet">
		<title>actions-citoyennes | acceuil</title>
	</head>
	<body>
		<?php Include("./header.php"); ?>
	<div id="main">
		<div id="authentification">
			<p id="login-title" class="description-text col-100 subtitle-2">
				Inscription
			</p>
		<div id="flex-signin-box">
			<p class="description-text col-80">
				Creer un compte avec un email
			</p>
		</div>
			<form id="" method="post" action="../back/sign_up_back.php">
				<input name="firstName" class="col-100 text-field-m2" type="text" value="" placeholder="Prenom"/>
				<input name="lastName" class="col-100 text-field-m2" type="text" value="" placeholder="Nom"/>
				<input class="col-100 text-field-m2" type="email" value="" placeholder="Email"/>
				<input class="col-100 text-field-m2" type="password" value="" placeholder="Mot de passe"/>
				<br/>
				<div class="col-100">
						<input class="button-m1 col-80 col-red" type="submit" value="Creer un compte"/>
					</div>
			</form>
			<p class="col-100  text-field-m1 " id="inscription-link">
				<a href="./log_in.php">J'ai deja un compte</a>
			</p>
		</div>
	</div>
		<?php Include("./footer.php"); ?>
	</body>
</html>

