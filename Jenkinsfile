node() {
    checkout scm
    def nodeHome = tool 'nodeJSTool'
    env.PATH="${env.PATH}:${nodeHome}/bin"
    sh 'npm install'
    sh 'npm run test'
}