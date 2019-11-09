## Agent Profile

Each *game agent* has a set of attributes that defines character's role in the game world, unique behavior, personal preferences, strengths and weaknesses, communication and work skills, capabilities in social interactions, etc.

The set of base agent unit attributes are always public to all agents:
<div class="table-description">

  | Attribute | Description |
  | -- | -- |
  | Location on the map | Coordinates on the current game map |
  | Residence place | House or apartment the agent lives in |
  | Current role/position in the project | The agent can take a part in only one project at a time |
  | Current political role | Official management functions in the overall community |

</div>

Other profile attributes are hidden for other agents by default, and some even hidden for the agent himself, but could be described. Hidden profile attributes exploration is a key in the primary gameplay mechanics that drives game simulation and progression.

Hidden attributes divided into three groups: agent skills that the agent is leveling up, communication traits, and behavior traits. Traits are permanent most of the time, but some of them can slightly change by the storyline events and by the projects completion too.

### Skills

They affect the efficiency of the agent when he is working on specific task in the project or talk to other agents.

There is a number of professions required to complete the project. Exact set of professions available in the game is defined by the currently discovered projects. Some professions are shared across several projects, and some are unique. These traits are hidden to other agents by default. Each agent in theory can do any work in the project, but the effeciency can differ significantly. The details on the projects and the gameplay economics model described [here](#economics-model).

<div class="table-description">

  | Skill | Function |
  | -- | -- |
  | Base communication skill level | Defines the ability of the agent to simulate any emotional traits that don't belong to his profile. This skill is leveling up when the agent reaches desirable goals in conversation session with another agent. |
  | Level of professional skills | Individual level of skill defines speed of the task completion. When the agent works on the task, the relevant skills are leveling up once the task completed successfully. Means that the agent prefers working on the tasks based on his skills. And other agents may want to engage the most suitable agents based on their known skills to the project. |
  | Professional skill leveling curves | Agents may have different learning curves. For example, for some it's easier to level up in the beginning, but harded to progress later stages. The learning curve is defined by a formula with unique factors. These factors are static for the whole agent's lifetime. Also these factors are hidden for the agent himself too. So the agent doesn't know even his own potential strength and weaknesses too. But he(and other agents too) is able to guess it during a set of tries. The guessing algorthim of the personal skills is based on polynomial approximation. Also there is one project allows to reveal leveling curves for all agents at once. |

</div>

### Emotional Profile

This set of discrete relay traits represents emotional nuanses of speach and behavior in communicating with other agents. They affect agent's communication capabilities only, and don't affect any functional aspects. The more emotional traits match between two agents the more chance they come into an arrangment in conversation. In other words the agents with closer Emotional Profiles tend to understand better each other by default. Also the agent is able to slowly learn other agents emotional traits he speaks to, and as such he can adjust his way of communication individually to grow his influence.

  - Politeness / Rudeness
  - Optimistic / Pessimistic
  - Cheerful / Moody
  - Verbose / Concise
  - Idealist / Realist

### Behavior Traits

Various scale characterisitcs measuring behavior functions of the agent that affect agent's task priorities and decision making.

<div class="table-description">

  | Trait | Function |
  | -- | -- |
  | Solidity/Agility scale | Measures the ability of the agent to stick with initially choosen plan regardless of the changing circumstances. This measurement applies to the technical goals only. |
  | Morale scale | Same as Solidity, but in the opposite to Solidity it applies to the human relations. In other words this scale estimates the trustworthy of the agent in long-term cooperations. |
  | Secretivity scale | Estimates whether the agent tends to keep valuable information hidden to the agents he doesn't trust well. |
  | Introvert/Extrovert scale | Introverts tend to level up their own skills and to learn their own skill curves at first place. Extroverts tend to learn other agent traits, and relationships between agents. |
  | Empathy scale | Defines speed in learning of other agent *Emotional Profiles* during conversations, and the speed of the base communication skill leveling up. |
  | Altruism/Egoism scale | Altruists tend to make decisions in controversial situations to help other agents reaching their goals. Egoists care about their personal goals at first place. |
  | Practitioner/Theoretician scale | This aspect influences the desirability of the agent to support initiatives and projects aiming to increase the common community wellfare as well as his own quality of life versus long-term fundamental researches. |

</div>
