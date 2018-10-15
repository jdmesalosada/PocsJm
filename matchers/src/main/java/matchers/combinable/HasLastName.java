package matchers.combinable;

import model.User;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class HasLastName {

    public static Matcher<User> isEqual(final String expectedLastName) {
        return new TypeSafeMatcher<User>() {
            @Override
            protected boolean matchesSafely(User actualUser) {
                return actualUser.getLastName().equals(expectedLastName);
            }

            public void describeTo(Description description) {
                {
                    description.appendText(expectedLastName);
                }
            }

        };
    }

}
