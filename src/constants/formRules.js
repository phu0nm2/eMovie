const formRules = {
    usernameRules: [
        {
            required: true,
            message: "Please input username!"
        }
    ],

    passwordRules: [
        {
            required: true,
            message: "Please input password!"
        },
        {
            min: 6,
            message: "Password minimum length is 6!"
        },
        {
            max: 12,
            message: "Password maximum length is 12!"
        },
    ],

    phoneRules: [
        {
            required: true,
            message: "Please input phone numbers!"
        },
        {
            len: 10,
            message: "Phone number length must be 10!"
        },
        {
            pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            message: "Phone number must be all number characters!"
        }
    ],

    emailRules: [
        {
            required: true,
            message: "Please input email!"
        },
        {
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email must be correct format!"
        }
    ],

    fullnameRules: [
        {
            required: true,
            message: "Please input full name!"
        }
    ]
}

const addNewRules = {
    tenPhim: [
        {
            required: true,
            message:
                "Movie title is required",
        },
    ],
    moTa: [
        {
            required: true,
            message:
                "Description is required",
        },
    ],
    ngayKhoiChieu: [
        {
            type: "object",
            required: true,
            message:
                "Please select time!",
        },
    ],
    trailer: [
        {
            required: true,
            message: 'Trailer URL is required'
        },
        {
            pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
            message: 'Trailer URL must start with HTTP/HTTPS'
        }
    ]
}

const showtimeRules = {
    heThongRap: [
        {
            required: true,
            message: 'Theater system field is required'
        }
    ],
    cumRap: [
        {
            required: true,
            message: 'Theater center field is required'
        }
    ],
    ngayChieuGioChieu: [
        {
            required: true,
            message: 'Showtime field is required'
        }
    ],
    giaVe: [
        {
            required: true,
            message: 'Price field is required'
        },
    ],
}

export {
    formRules,
    addNewRules,
    showtimeRules
}