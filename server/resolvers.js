const { Team } = require('./connectors');

export const resolvers = {
    Query: {
        helloString: () => "Hello World!",
        teams: () => Team.find({}, (err, teams) => {
            //If there is an error return an error
            if(err) throw new Error(err)
            //If there isn't just return the teams.
            return teams;
        }),
        team: (_, args, context) => Team.findOne({teamName: args.name}, (err, team) => {
            //If there is an error return the error
            if(err) throw new Error(err);
            //If there is not a team with that name return a error
            if(!team) throw new Error("Team not found!");
            //Else return the team.
            return team;
        })
    }
};
