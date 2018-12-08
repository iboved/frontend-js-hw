/*

map - show map
legend - legend for map
north - move forward
east - move right
south - move back
west - move left
isFree - say what direction you want check
hint - hint
restart - restart

*/

// Level 1

/*

###
#*#
# #
#@#
###

*/

while (isFree('north')) {
    north();
}


// Level 2

/*

###################
#@               *#
###################

*/

while (isFree('east')) {
    east();
}


// Level 3

/*

##########
#@########
#  #######
##  ######
###  #####
####  ####
#####  ###
######  ##
####### *#
##########

*/

for (let i = 0; i < 7; i++) {
    south();
    east();
}


// Level 4

/*

#########
#@#######
#    ####
#### ####
####  ###
##### ###
##### ###
#####   #
#######*#
#########

*/

for (let i = 0; i < 4; i++) {
    while (isFree('east')) {
        east();
    }

    while (isFree('south')) {
        south();
    }
}


// Level 5

/*

#########
#@      #
####### #
#   #   #
# # # ###
# # # ###
# #   ###
# #######
#      *#
#########

*/

while (isFree('east')) {
    east();
}

for (let i = 0; i < 2; i++) {
    while (isFree('south')) {
        south();
    }

    while (isFree('west')) {
        west();
    }
}

while (isFree('north')) {
    north();
}

while (isFree('west')) {
    west();
}

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}


// Level 6

/*

#########
#@#     #
# ## ## #
# #  ## #
# # ### #
# # #   #
#   # # #
### # ###
#   #  *#
#########

*/

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

for (let i = 0; i < 2; i++) {
    while (isFree('north')) {
        north();
    }

    while (isFree('east')) {
        east();
    }
}

for (let i = 0; i < 4; i++) {
    south();
}

while (isFree('west')) {
    west();
}

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}


// Level 7

/*

##################
#@#     ##########
# # # #  #########
# ### ##   #######
#  #   # # #######
#  #   # # #######
# ### ##   #######
#   # #  #########
# # # # ##########
# # # # ##########
#   # # ##########
# ### # ##########
#     # ### ######
### ### ### ######
#   #           ##
# ### ##### ### ##
# ##  ##### ### ##
#  # ########## ##
# ## ########## ##
###  ########## ##
##  ########### ##
#  ############ ##
# ############# ##
# ############# *#
##################

*/

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

while (isFree('north')) {
    north();
}

for (let i = 0; i < 2; i++) {
    while (isFree('east')) {
        east();
    }

    while (isFree('south')) {
        south();
    }
}

west();

while (isFree('south')) {
    south();
}

while (isFree('east')) {
    east();
}

while (isFree('south')) {
    south();
}

east();
