#
# SPDX-FileCopyrightText: 2020 John Samuel <johnsamuelwrites@gmail.com>
#
# SPDX-License-Identifier: GPL-3.0-or-later
#

from rdflib import Graph, URIRef, RDF

# Creation of graph
g = Graph()

# Identifiers (URI) for different programming languages
C = URIRef("https://example.com/C")
Cpp = URIRef("https://example.com/C++")
Python = URIRef("https://example.com/Python")

# Identifier (URI) for spcifying the type
ProgrammingLanguage = URIRef("https://example.com/ProgrammingLanguage")

# Add triples to the graph
g.add((C, RDF.type, ProgrammingLanguage))
g.add((Cpp, RDF.type, ProgrammingLanguage))
g.add((Python, RDF.type, ProgrammingLanguage))

print("Triples: ")
for s, p, o in g:
    print((s, p, o))


# Querying the graph
qres = g.query(
    """SELECT ?s ?p ?o 
       WHERE {
            ?s ?p ?o
       }""")

print("Query Results: ")
for row in qres:
    print(row)

# Give me all the programming languages
qres = g.query(
        """	  PREFIX example: <https://example.com/>
          SELECT ?proglang {
            ?proglang  rdf:type example:ProgrammingLanguage
        }""")

print("Query Results (Give me all programming languages): ")
for row in qres:
    print(row)
