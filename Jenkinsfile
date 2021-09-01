pipeline {
    agent any
    
    tools{
        nodejs 'node'
    }

    stages {
        stage('build') {
            steps {
                sh 'echo "1. GENERACION (instalando dependecias...)"'
                sh "npm install"  
            }
        }
        
        stage('test') {
            steps {
                sh 'echo "2. PRUEBAS (Realizando pruebas unitarias...)"'
                sh "npm test"
            }
        }
        
        stage('deploy'){
            steps{
                sh 'echo "3. DESPLIEGUE (Subiendo pagina rama testing a S3...)"'            
                withAWS(region: 'us-east-1', credentials: 'admin-s3') {
                    s3Upload(
                        bucket: 'sa-practica1', 
                        file: "src/index.html",
                        path: "testing/",                      
                        acl: "PublicRead"
                    )
                }                
            }
        }

        stage('integration') {
            steps {
                sh 'echo "4. INTEGRACION CONTINUA (Realizando pruebas punto a punto...)"'
                sh "npm run cypress:open"
            }
        }
    }
}