package pack.infrastructure.in.rest.path;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import jakarta.inject.Inject;
import pack.infrastructure.builder.Built;
import pack.application.api.in.IUserModel;
import pack.application.dto.User;

import java.util.ArrayList;

@Path("/")
public class Service {

  @Inject
  @Built
  IUserModel MU;

  @DELETE
  @Path("/deleting/{id}")
  public boolean deleteProduct(@PathParam("id") int id) { return
    MU.delete(id);
  }

  @POST
  @Path("/adding")
  @Consumes("application/json")
  @Produces("text/plain")
  public boolean addProduct(String userJSON)  {
    Jsonb jsonb = JsonbBuilder.create();
    User u = jsonb.fromJson(userJSON, User.class);
    System.out.print(u);
    System.out.print(userJSON);
    return MU.add(u);
  }

  @GET
  @Path("/player/{id}")
  public Response getPlayer(@PathParam("id") int id){
    User d = MU.selectOne(id);
    Jsonb jsonb = JsonbBuilder.create();
    String productsJSON = jsonb.toJson(d);
    return Response.ok(productsJSON).build();
  }
  @GET
  @Path("/players")
  public Response getPlayers(){
    ArrayList<User> d = MU.selectAll();
    Jsonb jsonb = JsonbBuilder.create();
    String productsJSON = jsonb.toJson(d);
    return Response.ok(productsJSON).build();
  }
  }

