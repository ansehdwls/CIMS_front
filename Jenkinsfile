pipeline {
    agent any

    stages {
        stage('Prepare') {
            agent any

            steps {
                echo "Clonning Repository" 
                
                git url: 'https://github.com/ansehdwls/CIMS_front',
                    branch: 'production',
                    credentialsId: 'hbjs97'
            }


            post {
                success {
                    echo 'Repository clone success'
                }

                always {
                    echo 'tried...'
                }

                cleanup {
                    echo 'after all other post condition'
                }
            }
        }

        stage('Set envs') {
            agent any

            steps {
                echo 'Build docker-stack'

                dir('./') {
                    sh '''
                    chmod +x ./create.env.sh
                    sh ./create.env.sh
                    '''
                }
            }
            post {
                failure {
                    error 'environment varables set fail...'
                }
                success {
                    echo 'environment varables set success...'
                }
            }
        }

        stage('Build Docker') {
            agent any
            steps {
                echo 'Build Docker'

                dir('./') {    
                    sh '''
                    docker-compose -f stack.yml build
                    docker-compose -f stack.yml push
                    scp .env ubuntu@52.78.166.38:~/git/CIMS_front/
                    ssh ubuntu@52.78.166.38 "cd ~/git/CIMS_front && bash ./deploy.sh"
                    '''
                }
            }
            post {
                failure {
                    error 'build fail...'
                }
                success {
                    echo 'build success...'
                }
            }
        }
    }
}
