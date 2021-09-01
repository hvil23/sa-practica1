pipeline {
    agent any
    
    tools{
        nodejs 'node'
    }

    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                // sh "rm -rf sa-practica1"
                sh 'git clone https://github.com/hvil23/sa-practica1.git'
                sh "npm cache clean --force "
                sh "npm install"  
            }
        }
        
        stage('test') {
            steps {
                sh "npm test"
            }
        }
        
        stage('deploy'){
            steps{
                sh "echo subiendo a s3...."
                withAWS(region:'us-east-1', credentials:'admin-s3') {
                    s3Upload(bucket:'sa-practica1', file:'src/index.html')
                }                
            }
        }
    }
}