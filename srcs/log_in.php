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
			<p id="login-title" class="description-text col-100">
				Connectez vous avec votre email
			</p>
			<a href="./sign_up.php">
				<div id="flex-signin-box">
						<p id="signin-box" class="description-text col-80">
							Vous n'avez pas encore de compte ?
						</p>
				</div>
			</a>
				<form id="" method="post" action="../back/log_in_back.php">
					<input name="email" class="col-100 text-field-m2" type="email" value="" placeholder="Votre adresse email"/>
					<input name="password" class="col-100 text-field-m2" type="password" value="" placeholder="Votre mot de passe"/>
					<br/>
					<div class="col-100">
						<input class="button-m1 col-50 col-red" type="submit" value="Valider"/>
					</div>
				</form>
				<p class="col-100  text-field-m1 " id="inscription-link">
					<a href="#">J'ai perdu mon mot de passe</a>
				</p>
			</div>
		</div>
		<?php Include("./footer.php"); ?>
	</body>
</html>
