pipeline {
  agent any
  stages {
    stage('environment') {
      steps {
        sh 'hostname'
        sh 'id'
        sh 'whoami'
        sh 'ifconfig'
        sh 'cat /etc/os-release'
        sh 'uname -a'
        sh 'env'
        sh 'pwd'
        sh 'sudo docker -v'
      }
    }

  }
}