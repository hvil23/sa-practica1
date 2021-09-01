pipeline {
    agent any
    
    tools{
        nodejs '12.16.3'
    }

    stages {
        stage('build') {
            steps {
                sh 'npm -version'
                sh "rm -rf sa-practica1"
                sh 'git clone https://github.com/hvil23/sa-practica1.git'
                dir("sa-practica1"){
                    sh "npm cache clean --force "
                    sh "npm install"
                }
                
                
            }
        }
        
        stage('test') {
            steps {
                dir("sa-practica1"){
                    sh "npm test"
                }
            }
        }
        
        stage('deploy'){
            steps{
                dir("sa-practica1"){
                    echo 'Desplegando a S3'
                    // withAWS(region:'us-east-1', credentials:'admin-s3') {
                        // s3Upload(bucket:'sa-practica2', includePathPattern:'**/*')
                    // }
                };
            }
        }
    }
}