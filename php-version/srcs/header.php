<?php

/* ************************************************************************** */
/*                                                                            */
/*  header.php                                                                */
/*                                                                            */
/*   By: elhmn <www.elhmn.com>                                                */
/*             <nleme@live.fr>                                                */
/*                                                                            */
/*   Created: Sat Jun 23 11:29:34 2018                        by elhmn        */
/*   Updated: Sat Jun 23 11:56:30 2018                        by elhmn        */
/*                                                                            */
/* ************************************************************************** */

?>

<header>
	<div id="top-bar">
		<h2 class="title-logo"><a href="/index.php">Actions Citoyennes</a></h2>
		<section class="selection">
		<ul id="user-data">
		<?php
		if (isset($canConnect) && $canConnect === true)
		{
			echo '
				<li class="button-m1"><a href="/srcs/log_in.php">Connexion</a></li>
				<li class="button-m1"><a href="/srcs/sign_up.php">Inscription</a></li>
			</ul>' ;
		}
		?>
		<nav id="menu-site">
			<ul>
				<li class="button-m1"><a href="#">Actions</a></li>
			</ul>
		</nav>
		<section>
	</div>
</header>
