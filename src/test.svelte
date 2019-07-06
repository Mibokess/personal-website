/* The actual timeline (the vertical ruler) */
    .timeline {
        margin: 0 0 0 10%;
    }

    /* The actual timeline (the vertical ruler) */
    .timeline::after {
        content: '';
        position: relative;
        width: 6px;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 10%;
        right: 20%;
        z-index: 2;
    }

    /* Container around content */
    .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
    }

    /* The circles on the timeline */
    .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -16px;
        background-color: black;
        border: 4px solid white;
        top: 15px;
        border-radius: 50%;
        z-index: 3;
    }

    /* Add arrows to the right container (pointing left) */
    .container::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        left: 31px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    /* The actual content */
    .content {
        padding: 20px 30px;
        background-color: white;
        position: relative;
        border-radius: 6px;
    }

    /* Media queries - Responsive timeline on screens less than 600px wide */
    @media screen and (max-width: 600px) {
        /* Place the timelime to the left */
        .timeline::after {
            left: 31px;
        }

        /* Full-width containers */
        .container {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }

        /* Make sure that all arrows are pointing leftwards */
        .container::before {
            left: 60px;
            border: medium solid black;
            border-width: 10px 10px 10px 0;
            border-color: transparent black transparent transparent;
        }

        /* Make sure all circles are at the same spot */
        .left::after, .right::after {
            left: 15px;
        }

        /* Make all right containers behave like the left ones */
        .right {
            left: 0%;
        }
    }