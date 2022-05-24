const {createLogger, transports, format} = require("winston");
const {colorize, timestamp, simple, combine, printf, label} = format;

const printFormat = {
    file : printf(({ timestamp, label, level ,message })=>{
        return `${timestamp} [${label}] ${level}: ${message}`;
    }),
    console : printf(({ label, level ,message })=>{
        return `[${label}] ${level}: ${message}`;
    }),
}

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기",
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd"
        }),
        printFormat.file,
    ),
    console: combine(
        label({
            label: "백엔드 맛보기",
        }),
        printFormat.console,
    ),
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
    transports:[opts.file,],
});

if(process.env.NODE_ENV !== "production"){
    logger.add(opts.console,);
}


module.exports = logger;