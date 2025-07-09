import { createLogger, format, transports } from "winston";
import path from "path";

const logDir = path.join(process.cwd(), "logs");

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
        format.printf(({ timestamp, level, message }) => `[${timestamp} ${level.toUpperCase()}: ${message}]`),
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple(),
            ),
        }),
        new transports.File({ 
            filename: path.join(logDir, "error.log"), 
            level: "error" 
        }),
        new transports.File({ 
            filename: path.join(logDir, "common.log"), 
            level: "info",
            format: format.combine(
                format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
                format.printf(({ timestamp, level, message }) => `[${timestamp} ${level.toUpperCase()}: ${message}]`),
                format((info) => info.level === 'info' ? info : false)() // Filter iba INFO
            )
        }),
    ],
});

export default logger;