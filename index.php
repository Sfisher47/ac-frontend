<?php

/* ************************************************************************** */
/*                                                                            */
/*  index.php                                                                 */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Sat Jun 23 11:30:16 2018                        by elhmn        */
/*   Updated: Sat Jun 23 11:56:15 2018                        by elhmn        */
/*                                                                            */
/* ************************************************************************** */

?>

<!doctype html>
<?php
// footer and header param config
	$canConnect = true;
?>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="./css/main_style.css">
		<link href="https://fonts.googleapis.com/css?family=Italianno|Lato|Josefin+Sans" rel="stylesheet">
		<title>actions-citoyennes | acceuil</title>
	</head>
	<body>
		<?php Include("srcs/header.php"); ?>
		<div id="main">
			<div id="search">
				<p class="description-text subtitle">
					<strong>
						Pour une participation citoyenne.					</strong>
				</p>
				<p class="description-text">
					<strong>
					Participez a de nombreuses actions pres de chez vous.
					</strong>
				</p>
				<form id="search-field" action="search.php" method="post">
					<input class="col-100 text-field-m1" name="keyword" type="text" value="" placeholder="Quelles actions vous interessent ?"/>
					<br/>
					<input class="button-m1 col-100" type="submit" value="Rechercher"/>
					<div class="button-m1 col-red">Proposer une action</div>
				</form>
				<p class="description-text">
				Le citoyen au coeur de l'action sociale et solidaire.
				</p>
			</div>
			<div id="site-description">
				<a name="apropos">
					<p class="description-text subtitle">
							<strong>
								A Propos
							</strong>
					</p>
					<p class="description-text">
					Pellentesque pellentesque, odio id tincidunt porta, lacus tellus accumsan lorem, posuere varius est lacus pharetra nibh. Sed egestas ornare velit, quis faucibus ipsum lacinia a. Fusce vel ultricies sapien, tempor pharetra sem. Nam nulla mi, tristique sit amet convallis vel, consequat quis risus. Aliquam sed aliquam felis. 
					</p>
				</a>
			</div>
			<div id="contact-us">
				<a name="contactus">
					<p class="description-text subtitle">
							<strong>
								Contact us
							</strong>
					</p>
					<p class="description-text">
					Pellentesque pellentesque, odio id tincidunt porta, lacus tellus accumsan lorem, posuere varius est lacus pharetra nibh. Sed egestas ornare velit, quis faucibus ipsum lacinia a. Fusce vel ultricies sapien, tempor pharetra sem. Nam nulla mi, tristique sit amet convallis vel, consequat quis risus. Aliquam sed aliquam felis. 
					</p>
				</a>
			</div>
		</div>
		<?php Include("srcs/footer.php"); ?>
	</body>
</html>
