## Game AI Model

As was mentioned [ealier](#solution) non-playable characters should be able to interact to each other autonomously from the player, unite into groups to organize common tasks and to evolve the game world in general. All NPCs can make decisions based only on their personal traits and the information they can gether from the game world during their life experience in the game. So the NPC is, broadly speaking, in the same boat as the playable character.

All non-playable characters represent a set of *game agents*.  For the sake of simplicity we will call both playable and non-playable characters as *agents*. Both have the same set of base characteristics and interaction options and are equal from the game mechnics point of view. In general, NPCs don't distinct between the player's controlled character and other NPCs when they interact to each other. The differences are only in the way of control: the playable character actions are driven by a player, and NPCs are driven by the game AI.

Agent's actual actions are driven by the Task Tree Framework.

### Task Tree Framework

Each AI controlled agent has a set of tasks that it wants to perform. The set of tasks shaping a tree of tasks when each subnode represents a subtask required to be performed to accomplish a supertask's goal. Every subtask has a priority from it's supertask prospective. The leaf tasks contain actual elementary actions need to be executed to accomplish it's supertask.

Let's assume the following simplified example of task trees of two agents John and Rita working on a common "Human-Genome" project:

```dot
digraph JohnRita {

  subgraph clusterJohn {
    label="John"

    J1[label="1 HG project"];
    J21[label="2.1 Contruct\nSequential device"];
    J22[label="2.2 Deliver device to\nRita"];
    J31[label="3.1 Go to\nStorehouse"];
    J32[label="3.2 Get\nComponents"];
    J33[label="3.3 Go to\nFactory"];
    J34[label="3.4 Assemble\ndevice"];
    J35[label="3.5 Go to\nRita"];
    J36[label="3.6 Give it\nto Rita"];
  }

  J1 -> J21;
  J1 -> J22;
  J21 -> J31;
  J21 -> J32;
  J21 -> J33;
  J21 -> J34;
  J22 -> J35;
  J22 -> J36;

  subgraph clusterRita {
    label="Rita"

    R1[label="1 HG Project"];
    R21[label="2.1 Go to\nLab"];
    R22[label="2.2 Wait for\ndelivery"];
    R23[label="2.3 Complete\nresearch"];
  }

  R1 -> R21;
  R1 -> R22;
  R1 -> R23;

  J36 -> R22[label="Interaction"];
}
```

Once all steps are finished the project is done. But certain things could happen that will interrupt this process. For example, once John arrives Storehouse he realizes that it runs out of required components. Or Rita decided to join another project in the middle of the process. In such cases the agent starts re-evaluating of his tasks tree based on collected information.

The task tree can be seen as a decision-action tree that represents a "program" of the agent actions.

### Tree Evaluation Process

The nodes of the tree built up from a set of predefined *node types* that could be stacked together based on the match requirements. Matching requirements determined by the gameplay models and rules sealed inside particular node implementation algorithm and could vary based on the agent previous experience.

Once the node task failed or interrupted, the algorithm is trying to re-evaluate a subtree from the parent task. If the parent task cannot be evaluated to required conditions in a new circumstances, the algorithm re-evaluates the next parent subtree up to the root.