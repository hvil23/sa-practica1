pipeline {
    agent any
    
    tools{
        nodejs 'node'
    }

    stages {
        stage('build') {
            steps {
                sh 'echo "1. GENERACION (Borrando contenido anterior, clonando repositorio, instalando dependecias...)"'
                sh 'npm --version'
                sh "rm -rf sa-practica1"
                sh 'git clone https://github.com/hvil23/sa-practica1.git'
                sh 'cd sa-practica1'
                sh "npm cache clean --force "
                sh "npm install"  
            }
        }
        
        stage('test') {
            steps {
                sh 'echo "2. PRUEBAS (Realizando pruebas unitarias...)"'
                sh 'cd sa-practica1'
                sh "npm test"
            }
        }
        
        stage('deploy'){
            steps{
                sh 'echo "3. DESPLIEGUE (Subiendo pagina rama testing a S3...)"'
                sh 'cd sa-practica1'                
                withAWS(region: 'us-east-1', credentials: 'admin-s3') {
                    s3Upload(
                        bucket: 'sa-practica1', 
                        file: "sa-practica1/src/index.html",
                        path: "testing/" // no trailing slash                         
                    )
                }                
            }
        }
    }
}