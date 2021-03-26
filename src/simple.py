#
# SPDX-FileCopyrightText: 2020 John Samuel <johnsamuelwrites@gmail.com>
#
# SPDX-License-Identifier: GPL-3.0-or-later
#

from rdflib import Graph, URIRef

# Creation of graph
g = Graph()

# Identifiers (URI) for different programming languages
C = URIRef("https://example.com/C")
Cpp = URIRef("https://example.com/C++")
Python = URIRef("https://example.com/Python")

# Identifier (URI) for spcifying the type
ProgrammingLanguage = URIRef("https://example.com/ProgrammingLanguage")

# Identifier (URI) for specifying the relationship
IsA = URIRef("https://example.com/IsA")

# Add triples to the graph
g.add((C, IsA, ProgrammingLanguage))
g.add((Cpp, IsA, ProgrammingLanguage))
g.add((Python, IsA, ProgrammingLanguage))

print("Triples: ")
for s, p, o in g:
    print((s, p, o))


# Querying the graph
qres = g.query(
    """ SELECT ?s ?p ?o 
       WHERE {
            ?s ?p ?o
       }""")

print("Query Results: ")
for row in qres:
    print(row)

# Give me all the programming languages
qres = g.query(
    """ SELECT ?proglang {
        ?proglang <https://example.com/IsA> <https://example.com/ProgrammingLanguage>
    }""")

print("Query Results (Give me all the programming languages): ")
for row in qres:
    print(row)

# How many programming languages are there in my database?
qres = g.query(
    """SELECT (count(?proglang) as ?count) {
        ?proglang <https://example.com/IsA> <https://example.com/ProgrammingLanguage>
    }""")

print("Query Results (How many programming languages are there in my database?): ")
for row in qres:
    print(row)

# What is C?
qres = g.query(
    """SELECT ?type {
        <https://example.com/C++> <https://example.com/IsA> ?type 
    }""")

print("Query Results (What is C?): ")
for row in qres:
    print(row)
