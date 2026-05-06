#!/usr/bin/env node

const debounce = require('lodash.debounce')
const chokidar = require('chokidar')
const program = require('caporal')
const fs = require('fs')
const { spawn } = require('child_process')
const chalk = require('chalk');

program
    .version('0.0.1')
    .argument('[filename]', 'name of the file to excute')
    .action(async ({filename}) => {
        const name = filename || 'index.js'

        try{
            await fs.promises.access(name)
        }catch(err){
            // console.log(`iam not here ${name}`)
            throw new Error(`Could not find the file ${name}`)
        }

        let proc //stand for process we don't use process as a variable because it's already taken
        const start = debounce(()=> {
            if(proc){
                proc.kill()
            }
            console.log(chalk.yellow('>>>>>Starting process ...'))
            spawn('node', [name], { stdio: 'inherit' })
        }, 100)


        chokidar.watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start)   
    })

program.parse(process.argv)

